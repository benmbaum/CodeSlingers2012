using CodeSlingers2012.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CodeSlingers2012.Models
{
    public static class ExtensionMethods
    {
        public static SectionContentModel ToSectionContentModel(this SectionContent content)
        {
            return new SectionContentModel()
                       {
                           Id = content.Id,
                           Section = (SectionNames)content.Section,
                           SubSection = content.SubSection,
                           SectionId = content.SectionId,
                           Title = content.Title,
                           ContentUrl = content.ContentUrl,
                           ContentText = content.ContentText,
                           ContentUrlText = content.ContentUrlText,
                           ImageUrl = content.ImageUrl,
                           SortOrder = content.SortOrder
                       };
        }

        public static SectionContent ToSectionContent(this SectionContentModel content)
        {
            return new SectionContent()
                       {
                           Id = content.Id,
                           Section = (int)content.Section,
                           SubSection = content.SubSection,
                           SectionId = content.SectionId,
                           Title = content.Title,
                           ContentUrl = content.ContentUrl,
                           ContentText = content.ContentText,
                           ContentUrlText = content.ContentUrlText,
                           ImageUrl = content.ImageUrl,
                           SortOrder = content.SortOrder
                       };
        }
    }
}