//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace CodeSlingers2012.Entities
{
    using System;
    using System.Collections.Generic;
    
    public partial class SectionContent
    {
        public int Id { get; set; }
        public int Section { get; set; }
        public Nullable<int> SubSection { get; set; }
        public int SectionId { get; set; }
        public string Title { get; set; }
        public string ContentText { get; set; }
        public string ContentUrl { get; set; }
        public string ContentUrlText { get; set; }
        public string ImageUrl { get; set; }
        public int SortOrder { get; set; }
    }
}
