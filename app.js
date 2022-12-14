// Exporting a dashboard

const path = require("path");

// Require FusionExport
const { ExportManager, ExportConfig } = require("../fusionexport-node-client");

// Instantiate ExportManager
const exportManager = new ExportManager({
    host: "localhost",
    port: "1337"
});

// Instantiate ExportConfig and add the required configurations
const exportConfig = new ExportConfig();


exportConfig.set('quality', 'best');

exportConfig.set("chartConfig", path.join(__dirname, "resources", "chart-config-file.json"));
exportConfig.set("templateFilePath", path.join(__dirname, "resources", "dashboard-template.html"));
exportConfig.set("type", "pdf");
exportConfig.set("headerEnabled", false);
exportConfig.set("footerEnabled", "true");

// provide the export config
exportManager
  .export(exportConfig, ".", false)
  .then(exportedFiles => {
    exportedFiles.forEach(file => console.log(file));
  })
  .catch(err => {
    console.log(err);
  });
