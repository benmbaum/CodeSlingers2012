using System.Web.Mvc;
using CodeSlingers2012.Entities;
using System.ComponentModel.DataAnnotations;
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
        public JobFormModel form { get; set; }

        public void InitHomeViewModel()
        {
            nav = new PageNavViewModel();
            homeImages = new HomeImageViewModel();
            homeLinks = new HomeLinkViewModel();
            menu = new MenuViewModel();
            locations = new LocationViewModel();
            jobs = new JobsViewModel();
            footer = new FooterViewModel();
            form = new JobFormModel();
        }

    }

    public class TopViewModel
    {
        public List<SectionContentModel> homeImages { get; set; }
        public List<SectionContentModel> homeLinks { get; set; }
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
        [UIHint("SectionContent")]
        public List<SectionContentModel> items { get; set; }
    }

    public  class JobFormModel
    {
        public JobFormModel()
        {
            var rollData = new List<SelectListItem>();
            rollData.Add(new SelectListItem() { Text = "Roll 1", Value = "1" });
            rollData.Add(new SelectListItem() { Text = "Roll 2", Value = "2" });
            rollData.Add(new SelectListItem() { Text = "Roll 3", Value = "3" });

            Rolls = rollData.AsEnumerable();
        }

        [Required]
        public string Name { get; set; }

        [Required]
        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }

        [Required]
        [DataType(DataType.PhoneNumber)]
        public string PhoneNumber { get; set; }

        public string Resident { get; set; }
        
        public int RollId { get; set; }

        public IEnumerable<SelectListItem> Rolls { get; set; }

        public FoodSelection Selection { get; set; }

        public string About { get; set; }

        public string upload { get; set; }

        public enum FoodSelection
        {
            Sushi, Sake
        }
    }

    public class JobFormResponse
    {
        public enum ResponseStatus
        {
            Failure,
            Success,
        }

        public ResponseStatus Status { get; set; }
        public string ErrorMessage { get; set; }
    }
}