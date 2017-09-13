using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using TellmePWD.Models;
using TellmePWD.Util;

namespace TellmePWD.Controllers
{
    public class BaseController : ApiController
    {

        protected void SetSystemPropertyForPost(IEntity entity)
        {
            if(entity!= null)
            {
                entity.ID = StringUtils.GetID();
                entity.CreateTime = DateTime.Now;
                entity.UpdateTime = DateTime.Now;
            }
        }

        protected void SetSystemPropertyForPut(IEntity entity)
        {
            if (entity != null)
            {
                entity.UpdateTime = DateTime.Now;
            }
        }

    }
}
