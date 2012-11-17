using System.ComponentModel.DataAnnotations;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CodeSlingers2012.Models
{
    public class SectionContentModel
    {
        [HiddenInput(DisplayValue=false)]
        public int Id { get; set; }
        
        [HiddenInput(DisplayValue = false)]
        public int Section { get; set; }
        
        [HiddenInput(DisplayValue = false)]
        public int? SubSection { get; set; }
        
        [HiddenInput(DisplayValue = false)]
        public int SectionId { get; set; }

        [HiddenInput(DisplayValue = false)]
        public int SortOrder { get; set; }

        [MaxLength(100)]
        [DisplayFormat(NullDisplayText = "")]
        public string Title { get; set; }
        
        [MaxLength(1000)]
        [DisplayFormat(NullDisplayText = "")]
        [AllowHtml()]
        public string ContentText { get; set; }
        public string ContentTextLabel { 
            get { return string.IsNullOrEmpty(ContentText) ? string.Empty : ContentText.Length > 100 ? ContentText.Substring(0, 99) + "..." : ContentText; } 
        }
        
        [MaxLength(255)]
        [DisplayFormat(NullDisplayText = "")]
        public string ContentUrl { get; set; }
        
        [MaxLength(100)]
        [DisplayFormat(NullDisplayText = "")]
        public string ContentUrlText { get; set; }

        [MaxLength(255)]
        [DisplayFormat(NullDisplayText = "")]
        public string ImageUrl { get; set; }

    }
}