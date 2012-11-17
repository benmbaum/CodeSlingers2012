using CodeSlingers2012.Entities;
using CodeSlingers2012.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CodeSlingers2012.Controllers
{
    public class AdminController : Controller
    {
        private HomeViewModel model;

        public AdminController()
        {
            model = BuildHomeModel();
        }

        //
        // GET: /Admin/

        public ActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public ActionResult Navigation()
        {
            return View(model.nav);
        }

        [HttpGet]
        public ActionResult Top()
        {

            return View(model.top);
        }

        [HttpGet]
        public ActionResult Menu()
        {

            return View(model.menu);
        }

        [HttpGet]
        public ActionResult Location()
        {
            return View(model.locations);
        }

        [HttpGet]
        public ActionResult Jobs()
        {
            return View(model.jobs);
        }

        [HttpGet]
        public ActionResult Footer()
        {
            return View(model.footer);
        }

        [HttpGet]
        public ActionResult EditContent(int id)
        {
            var repo = new Repository();
            var model = MapSectionContentItem(repo.GetSectionContentById(id));
            return View("ContentEdit", model);
        }

        [HttpPost]
        public ActionResult EditContent(SectionContentModel contentModel)
        {
            var repo = new Repository();
            repo.SaveSectionContent(contentModel.ToSectionContent());

            switch (contentModel.Section)
            {
                case SectionNames.Header:
                    return RedirectToAction("Navigation");
                case SectionNames.Footer:
                    return RedirectToAction("Footer");
                case SectionNames.HomeImages:
                case SectionNames.HomeLinks:
                    return RedirectToAction("Top");
                case SectionNames.Jobs:
                    return RedirectToAction("Jobs");
                case SectionNames.Location:
                    return RedirectToAction("Location");
                case SectionNames.Menu:
                    return RedirectToAction("Menu");
                default:
                    return RedirectToAction("Index");
            }
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

            model.top = new TopViewModel();
            model.top.homeImages = model.homeImages;
            model.top.homeLinks = model.homeLinks;

            return model;
        }

        private List<SectionContentModel> MapSectionContent(List<SectionContent> items)
        {
            var returnItem = new List<SectionContentModel>();
            items.ForEach(i => returnItem.Add(i.ToSectionContentModel()));
            return returnItem;
        }

        private SectionContentModel MapSectionContentItem(SectionContent item)
        {
            return item.ToSectionContentModel();
        }

    }
}
