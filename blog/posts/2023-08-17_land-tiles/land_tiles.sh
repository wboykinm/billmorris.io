# BUILD A DATASET OF TILES AT A GIVEN ZOOM LEVEL THAT INTERSECT LAND
# USAGE: bash land_tiles.sh <integer zoom level between 0 and 22>

# Set target metatile zoom
ZOOM=$1
BBOX="[-180,-90,180,90]"

# Create metatiles at desired zoom
echo ${BBOX} | \
    mercantile tiles ${ZOOM} | \
    mercantile shapes > \
    z${ZOOM}_metatiles.geojsonl

# Get Natural Earth countries
curl -O https://naciscdn.org/naturalearth/10m/cultural/ne_10m_admin_0_countries.zip
unzip ne_10m_admin_0_countries.zip

# Join countries and metatiles
ogr2ogr \
    -f GeoJSON \
    z${ZOOM}_land_metatiles.geojson \
    z${ZOOM}_metatiles.geojsonl \
    -dialect sqlite \
    -sql "
        SELECT 
            m.id,
            REPLACE(REPLACE(REPLACE(m.id,', ','-'),'(',''),')','') AS layer,
            m.Geometry,
            GROUP_CONCAT(c.Name) AS countries
        FROM 'z${ZOOM}_metatiles.geojsonl'.z${ZOOM}_metatiles m
        JOIN 'ne_10m_admin_0_countries.shp'.ne_10m_admin_0_countries c 
            ON ST_Intersects(m.Geometry, c.Geometry)
        WHERE c.Name NOT IN ('Antarctica')
        GROUP BY m.id,m.Geometry
    "

# Clean up
rm -rf ne_10m_admin_0_countries.* z${ZOOM}_metatiles.geojsonl