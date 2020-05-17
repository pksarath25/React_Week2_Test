using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;

namespace ReactList.Controllers
{
    [Route("api/[controller]")]
    public class DataController : Controller
    { 
        [HttpGet("[action]")]
        public IEnumerable<Contact> Contacts()
        {

            var rng = new Random();
            Contact[] contacts = new Contact[]
            {
                    new Contact { id = 1, fullname = "Sarath", phone = "9993232456", email = "sarath@gmail.com"},
                    new Contact { id = 2, fullname = "Jacob", phone = "8934265789", email = "jacob@mail.com"},
                    new Contact { id = 3, fullname = "Varun", phone = "7843485678", email = "varun@yahoo.com "},
                    new Contact { id = 4, fullname = "Deepak", phone = "7842185678", email = "deepak@yahoo.com "},
                    new Contact { id = 5, fullname = "Asif", phone = "7843485348", email = "asif@yahoo.in "},
            };
            return contacts;
        }

        public class Contact
        {
            public int id { get; set; }
            public string fullname { get; set; }
            public string phone { get; set; }
            public string email { get; set; }
        }

    }
}
