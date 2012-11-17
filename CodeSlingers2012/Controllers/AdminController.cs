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

            model.top = new TopViewModel();
            model.top.homeImages = model.homeImages;
            model.top.homeLinks = model.homeLinks;

            return model;
        }

    }
}
