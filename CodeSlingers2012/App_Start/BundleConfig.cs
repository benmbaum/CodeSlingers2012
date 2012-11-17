using System.Web;
using System.Web.Optimization;

namespace CodeSlingers2012
{
    public class BundleConfig
    {
        // For more information on Bundling, visit http://go.microsoft.com/fwlink/?LinkId=254725
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryui").Include(
                        "~/Scripts/jquery-ui-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.unobtrusive*",
                        "~/Scripts/jquery.validate*"));

            bundles.Add(new ScriptBundle("~/bundles/api").Include(
                        "~/js/googlemaps.js",
                        "~/js/infobox.js"));

            bundles.Add(new ScriptBundle("~/bundles/main").Include("~/js/scripts.js", "~/js/jquery.cycle.all.js"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include("~/Scripts/modernizr-*"));

            bundles.Add(new StyleBundle("~/css").Include("~/css/style.css"));

            bundles.Add(new StyleBundle("~/admincss").Include(
                        "~/css/bootstrap.css", 
                        "~/css/admin.css"));

            bundles.Add(new StyleBundle("~/Content/css").Include("~/Content/jquery-ui-1.9.1.custom.css"));
        }
    }
}