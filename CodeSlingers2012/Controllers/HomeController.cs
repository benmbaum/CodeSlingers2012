using CodeSlingers2012.Entities;
using CodeSlingers2012.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CodeSlingers2012.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            var model = BuildHomeModel();

            return View(model);
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your app description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        private HomeViewModel BuildHomeModel()
        {
            var repo = new Repository();
            var model = new HomeViewModel();

            model.InitHomeViewModel();
            model.nav.items = repo.GetSectionContentItems(SectionNames.Header);
            model.homeImages.items = repo.GetSectionContentItems(SectionNames.HomeImages);
            model.homeLinks.items = repo.GetSectionContentItems(SectionNames.HomeLinks);
            model.menu.items = repo.GetSectionContentItems(SectionNames.Menu);
            model.locations.items = repo.GetSectionContentItems(SectionNames.Location);
            model.jobs.items = repo.GetSectionContentItems(SectionNames.Jobs);
            model.footer.items = repo.GetSectionContentItems(SectionNames.Footer);

            return model;
        }
    }
}
