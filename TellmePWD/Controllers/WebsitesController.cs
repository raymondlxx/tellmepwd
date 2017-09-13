using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using TellmePWD.Models;
using TellmePWD.Util;

namespace TellmePWD.Controllers
{
    [Authorize]
    [RoutePrefix("api/Websites")]
    public class WebsitesController : BaseController
    {
        private ApplicationDbContext db = new ApplicationDbContext();
        private ApplicationUserManager userManager;

        // GET: api/Websites
        public IQueryable<Website> GetWebsites()
        {
            return db.Websites;
        }

        // GET: api/Websites/5
        [ResponseType(typeof(Website))]
        public IHttpActionResult GetWebsite(string id)
        {
            Website website = db.Websites.Find(id);
            if (website == null)
            {
                return NotFound();
            }

            return Ok(website);
        }

        // PUT: api/Websites/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutWebsite(string id, Website website)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Website found = db.Websites.Find(id);
            found.Name = website.Name;
            found.Password = website.Password;
            found.URL = website.URL;
            found.Username = website.Username;
            found.UpdateTime = DateTime.Now;
            

            db.Entry(found).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!WebsiteExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        [Route("UpdateWebsiteGroup")]
        [HttpPut]
        [ResponseType(typeof(void))]
        public IHttpActionResult UpdateWebsiteGroup(UpdateWebsiteGroupRequest request)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Website found = db.Websites.Find(request.WebsiteID);
            if(found == null)
            {
                return NotFound();
            }

            var group = db.Groups.Find(request.GroupID);
            if(group == null)
            {
                return NotFound();
            }

            found.GroupID = request.GroupID;
            this.SetSystemPropertyForPut(found);
            db.Entry(found).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!WebsiteExists(request.WebsiteID))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Websites
        [ResponseType(typeof(Website))]
        public IHttpActionResult PostWebsite(Website website)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            website.ID = StringUtils.GetID();
            website.CreateTime = DateTime.Now;
            website.UpdateTime = DateTime.Now;

            db.Websites.Add(website);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (WebsiteExists(website.ID))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = website.ID }, website);
        }

        // DELETE: api/Websites/5
        [ResponseType(typeof(Website))]
        public IHttpActionResult DeleteWebsite(string id)
        {
            Website website = db.Websites.Find(id);
            if (website == null)
            {
                return NotFound();
            }

            db.Websites.Remove(website);
            db.SaveChanges();

            return Ok(website);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool WebsiteExists(string id)
        {
            return db.Websites.Count(e => e.ID == id) > 0;
        }
    }
}