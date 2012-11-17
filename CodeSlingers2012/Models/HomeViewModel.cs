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
        public LocationViewModel locations { get; set; }
        public JobsViewModel jobs { get; set; }
        public FooterViewModel footer { get; set; }
    }

    public class PageNavViewModel
    {
        public List<SectionContent> items { get; set; }
    }

    public class HomeImageViewModel
    {
        public List<SectionContent> items { get; set; }
    }

    public class HomeLinkViewModel
    {
        public List<SectionContent> items { get; set; }
    }

    public class LocationViewModel
    {
        public List<SectionContent> items { get; set; }
    }

    public class JobsViewModel
    {
        public List<SectionContent> items { get; set; }
    }

    public class FooterViewModel
    {
        public List<SectionContent> items { get; set; }
    }

}