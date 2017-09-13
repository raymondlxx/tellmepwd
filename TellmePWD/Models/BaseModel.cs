using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TellmePWD.Models
{
    public class BaseModel: IEntity
    {
        public string ID { get; set; }
        public DateTime CreateTime { get; set; }
        public DateTime UpdateTime { get; set; }
    }
}