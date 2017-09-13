using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TellmePWD.Models
{
    public interface IEntity
    {
        string ID { get; set; }
        DateTime CreateTime { get; set; }
        DateTime UpdateTime { get; set; }

    }
}
