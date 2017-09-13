using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TellmePWD.Models
{
    /// <summary>
    /// Entry
    /// </summary>
    public class Website: BaseModel
    {
        public string URL { get; set; }
        public string Name { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        /// <summary>
        /// the group id which this website belongs to
        /// </summary>
        public string GroupID { get; set; }

    }


    public class UpdateWebsiteGroupRequest
    {
        public string WebsiteID { get; set; }
        public string GroupID { get; set; }
    }
}