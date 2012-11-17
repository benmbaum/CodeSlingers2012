using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CodeSlingers2012.Controllers
{
    public class AdminController : Controller
    {
        //
        // GET: /Admin/

        public ActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public ActionResult Navigation()
        {

            return View();
        }

        [HttpGet]
        public ActionResult Top()
        {

            return View();
        }

        [HttpGet]
        public ActionResult Menu()
        {

            return View();
        }

        [HttpGet]
        public ActionResult Location()
        {

            return View();
        }

        [HttpGet]
        public ActionResult Jobs()
        {

            return View();
        }

        [HttpGet]
        public ActionResult Footer()
        {

            return View();
        }
    }
}
