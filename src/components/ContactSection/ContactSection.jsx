import { Button, Checkbox, Label, TextInput,Textarea  } from 'flowbite-react';
function ContactSection() {
  return (
    <div className="my-[5%]">
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="relative p-6 md:p-16">
          <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
            <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
              <h2 className="text-2xl mb-5 text-gray-5 font-bold sm:text-3xl dark:text-gray-200">
              Reach Out to Us
              </h2>
              <form className="flex max-w-md flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="name"  />
        </div>
        <TextInput id="name" type="text" placeholder="Your Name" required shadow />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email"  />
        </div>
        <TextInput id="email" placeholder="Your Email"  type="email" required shadow />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="message"  />
        </div>
        <Textarea  id="textarea" placeholder="Your Message..." type="text" required shadow />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="agree" />
        <Label htmlFor="agree" className="flex">
          I agree with the&nbsp;
          <a href="#" className="text-cyan-600 hover:underline dark:text-cyan-500">
            terms and conditions
          </a>
        </Label>
      </div>
      <Button type="submit">Send Message</Button>
    </form>
            
            </div>

            <div className="lg:col-span-6">
              <div className="relative">
                <div>
                  <div
                    id="tabs-with-card-1"
                    role="tabpanel"
                    aria-labelledby="tabs-with-card-item-1"
                  >
                    <img
                      className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]"
                      src="https://img.freepik.com/free-photo/online-message-communication-connection-concept_53876-124689.jpg"
                      alt="Image Description"
                    />
                  </div>

                  

                 
                </div>

            
              </div>
            </div>
          </div>

          <div className="absolute inset-0 grid grid-cols-12 w-full h-full">
            <div className="col-span-full lg:col-span-7 lg:col-start-6 bg-gray-100 w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full dark:bg-white/[.075]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
