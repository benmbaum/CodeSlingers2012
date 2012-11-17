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
                items = (from r in repo.SectionContents select r).ToList();
            }
            return items;
        }
    }
}