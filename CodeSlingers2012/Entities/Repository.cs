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

        public SectionContent GetSectionContentById(int Id)
        {
            var item = new SectionContent();

            using (var repo = new CodeSlingers2012Entities())
            {
                item = (from r in repo.SectionContents
                        where r.Id == Id
                        select r).FirstOrDefault();
            }
            return item;
        }

        public void SaveSectionContent(SectionContent sectionItem)
        {
            SectionContent item;
            var insert = false;

            using (var repo = new CodeSlingers2012Entities())
            {
                item = (from r in repo.SectionContents
                        where r.Id == sectionItem.Id
                        select r).FirstOrDefault();

                if (item == null)
                {
                    item = new SectionContent();
                    insert = true;
                }

                item.ImageUrl = sectionItem.ImageUrl;
                item.Section = sectionItem.Section;
                item.SectionId = sectionItem.SectionId;
                item.SortOrder = sectionItem.SortOrder;
                item.SubSection = sectionItem.SubSection;
                item.Title = sectionItem.Title;
                item.ContentText = sectionItem.ContentText;
                item.ContentUrl = sectionItem.ContentUrl;
                item.ContentUrlText = sectionItem.ContentUrlText;

                if (insert)
                {
                    repo.SectionContents.Add(item);
                }

                repo.SaveChanges();
            }
        }

    }
}