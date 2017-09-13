using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TellmePWD.Util
{
    public class StringUtils
    {
        public static string GetID()
        {
            return Guid.NewGuid().ToString("N");
        }
    }
}