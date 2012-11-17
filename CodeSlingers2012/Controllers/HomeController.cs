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
            model.nav.items = MapSectionContent(repo.GetSectionContentItems(SectionNames.Header));
            model.homeImages.items = MapSectionContent(repo.GetSectionContentItems(SectionNames.HomeImages));
            model.homeLinks.items = MapSectionContent(repo.GetSectionContentItems(SectionNames.HomeLinks));
            model.menu.items = MapSectionContent(repo.GetSectionContentItems(SectionNames.Menu));
            model.locations.items = MapSectionContent(repo.GetSectionContentItems(SectionNames.Location));
            model.jobs.items = MapSectionContent(repo.GetSectionContentItems(SectionNames.Jobs));
            model.footer.items = MapSectionContent(repo.GetSectionContentItems(SectionNames.Footer));

            return model;
        }

        private List<SectionContentModel> MapSectionContent(List<SectionContent> items)
        {
            var returnItem = new List<SectionContentModel>();
            items.ForEach(i => returnItem.Add(i.ToSectionContentModel()));
            return returnItem;
        }
    }
}
