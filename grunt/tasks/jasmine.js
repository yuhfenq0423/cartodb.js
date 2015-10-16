/**
 * Jasmine grunt task for CartoDB.js tests
 * https://github.com/gruntjs/grunt-contrib-jasmine#options
 * Load order: vendor, helpers, source, specs,
 */
module.exports = {
  task: function() {
    return {

      core: {
        src: [
          'dist/cartodb.core.uncompressed.js',
        ],
        options: {
          keepRunner: true,
          outfile: 'test/SpecRunner-core.html',
          vendor: [
            // Load & install the source-map-support lib (get proper stack traces from inlined source-maps)
            "node_modules/source-map-support/browser-source-map-support.js",
            "test/install-source-map-support.js",

            // These are only required because tests utilizes them
            "vendor/jquery.min.js",
            "vendor/underscore.js",
            "vendor/backbone.js",
            "vendor/mustache.js",
          ],
          specs: [
            'test/spec/api/sql.spec.js',
            '<%= config.tmp %>/core-specs.js'
          ],
          summary: true,
          display: 'short'
        }
      },

      // "old", will be deprecated one all src/ are migrated to src-browserify
      src: {
        src: [
          "vendor/jquery.min.js",
          "vendor/underscore.js",
          "vendor/backbone.js",
          "vendor/leaflet.js",
          "vendor/wax.cartodb.js",
          "vendor/mustache.js",
          "vendor/GeoJSON.js",
          "vendor/jscrollpane.js",
          "vendor/spin.js",
          "vendor/lzma.js",
          "vendor/mod/carto.js",
          "vendor/mod/torque.uncompressed.js",
          "vendor/mod/jquery-ui/jquery.ui.core.js",
          "vendor/mod/jquery-ui/jquery.ui.widget.js",
          "vendor/mod/jquery-ui/jquery.ui.mouse.js",
          "vendor/mod/jquery-ui/jquery.ui.slider.js",
          "vendor/html-css-sanitizer-bundle.js",
          "test/lib/sinon-1.3.4.js",
          "test/lib/sinon-ie.js",
          "src/cartodb.js",
          "src/core/**/*.js",
          "src/geo/geometry.js",
          "src/geo/map.js",
          "src/geo/ui/header.js",
          "src/geo/ui/legend.js",
          "src/geo/ui/infobox.js",
          "src/geo/ui/infowindow.js",
          "src/geo/ui/search.js",
          "src/geo/ui/mobile.js",
          "src/geo/ui/annotation.js",
          "src/geo/ui/layer_selector.js",
          'src/geo/ui/slides_controller.js',
          "src/geo/ui/share.js",
          "src/geo/ui/zoom_info.js",
          "src/geo/ui/tiles_loader.js",
          "src/geo/ui/zoom.js",
          "src/geo/ui/tooltip.js",
          "src/geo/ui/time_slider.js",
          "src/geo/ui/fullscreen.js",
          "src/geo/sublayer.js",
          "src/geo/layer_definition.js",
          "src/geo/common.js",
          "src/geo/leaflet/leaflet.geometry.js",
          "src/geo/leaflet/leaflet_base.js",
          "src/geo/leaflet/leaflet_plainlayer.js",
          "src/geo/leaflet/leaflet_tiledlayer.js",
          "src/geo/leaflet/leaflet_gmaps_tiledlayer.js",
          "src/geo/leaflet/leaflet_wmslayer.js",
          "src/geo/leaflet/leaflet_cartodb_layergroup.js",
          "src/geo/leaflet/leaflet_cartodb_layer.js",
          "src/geo/leaflet/torque.js",
          "src/geo/leaflet/leaflet.js",
          "src/geo/gmaps/gmaps.geometry.js",
          "src/geo/gmaps/gmaps_base.js",
          "src/geo/gmaps/gmaps_baselayer.js",
          "src/geo/gmaps/gmaps_plainlayer.js",
          "src/geo/gmaps/gmaps_tiledlayer.js",
          "src/geo/gmaps/gmaps_cartodb_layergroup.js",
          "src/geo/gmaps/gmaps_cartodb_layer.js",
          "src/geo/gmaps/torque.js",
          "src/geo/gmaps/gmaps.js",
          "src/geo/geocoder.js",
          "src/ui/common/dialog.js",
          "src/ui/common/share.js",
          "src/ui/common/notification.js",
          "src/ui/common/table.js",
          "src/ui/common/tabpane.js",
          "src/ui/common/dropdown.js",
          "src/vis/vis.js",
          "src/vis/image.js",
          "src/vis/layers.js",
          "src/vis/overlays.js",
          "src/api/layers.js",
          "src/api/sql.js",
          "src/api/vis.js"
        ],
        options: {
          keepRunner: true,
          outfile: 'test/SpecRunner.html',
          specs: [
            'test/spec/**/*.js',
            '!test/spec/src-browserify/**/*.js'
          ],
          helpers: 'test/spec/SpecHelper.js',
          vendor: [ "http://maps.googleapis.com/maps/api/js?sensor=false&v=3.12" ],
          summary: true,
          display: 'short'
        }
      }

    }
  }
}
