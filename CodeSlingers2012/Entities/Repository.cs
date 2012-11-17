using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CodeSlingers2012.Entities
{
    public class Repository
    {
        public List<SectionContent> GetAllSectionContent()
        {
            var items = new List<SectionContent>();

            using (var repo = new CodeSlingers2012Entities())
            {
                items = (from r in repo.SectionContents 
                         orderby r.Section, r.SortOrder
                         select r).ToList();
            }
            return items;
        }

        public List<SectionContent> GetSectionContentItems(SectionNames section)
        {
            var items = new List<SectionContent>();

            using (var repo = new CodeSlingers2012Entities())
            {
                items = (from r in repo.SectionContents 
                         where r.Section == (int)section 
                         orderby r.SortOrder
                         select r).ToList();
            }
            return items;
        }

        public SectionContent GetSectionContent(SectionNames section, int sectionId)
        {
            var item = new SectionContent();

            using (var repo = new CodeSlingers2012Entities())
            {
                item = (from r in repo.SectionContents 
                        where r.Section == (int)section && r.SectionId == sectionId 
                        select r).FirstOrDefault();
            }
            return item;
        }

    }
}