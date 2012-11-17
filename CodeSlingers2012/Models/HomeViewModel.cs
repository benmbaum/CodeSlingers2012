using CodeSlingers2012.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CodeSlingers2012.Models
{
    public class HomeViewModel
    {
        public PageNavViewModel nav { get; set; }
        public HomeImageViewModel homeImages { get; set; }
        public HomeLinkViewModel homeLinks { get; set; }
        public MenuViewModel menu { get; set; }
        public LocationViewModel locations { get; set; }
        public JobsViewModel jobs { get; set; }
        public FooterViewModel footer { get; set; }
        public TopViewModel top { get; set; }

        public void InitHomeViewModel()
        {
            nav = new PageNavViewModel();
            homeImages = new HomeImageViewModel();
            homeLinks = new HomeLinkViewModel();
            menu = new MenuViewModel();
            locations = new LocationViewModel();
            jobs = new JobsViewModel();
            footer = new FooterViewModel();
        }

    }

    public class TopViewModel
    {
        public HomeImageViewModel homeImages { get; set; }
        public HomeLinkViewModel homeLinks { get; set; }
    }

    public class PageNavViewModel
    {
        public List<SectionContentModel> items { get; set; }
    }

    public class HomeImageViewModel
    {
        public List<SectionContentModel> items { get; set; }
    }

    public class HomeLinkViewModel
    {
        public List<SectionContentModel> items { get; set; }
    }

    public class MenuViewModel
    {
        public List<SectionContentModel> items { get; set; }
    }

    public class LocationViewModel
    {
        public List<SectionContentModel> items { get; set; }
    }

    public class JobsViewModel
    {
        public List<SectionContentModel> items { get; set; }
    }

    public class FooterViewModel
    {
        public List<SectionContentModel> items { get; set; }
    }

}