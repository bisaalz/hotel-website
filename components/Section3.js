import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Tab } from "@headlessui/react";

const Section3 = () => {
  return (
    <div>
      <div className="SectionSliderNewCategories px-12 py-8 bg-[#F3F4F6] rounded-[45px] mx-4">
        <div className="SectionSliderNewCategories__PageHome_s1nc__rq_ flow-root glide--ltr glide--slider glide--swipeable">
          <div className="Section-Heading  flex flex-col sm:flex-row sm:items-end justify-between mb-12 lg:mb-16 text-neutral-900 dark:text-neutral-50">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-semibold">
                Featured places to stay
              </h2>
              <span className="mt-2 md:mt-3 font-normal block text-base sm:text-xl text-neutral-500 dark:text-neutral-400">
                Popular places to stay that Chisfis recommends for you
              </span>
            </div>
            <div className="mt-4 flex justify-end sm:ml-2 sm:mt-0 flex-shrink-0">
              <div
                className="NextPrev  flex items-center text-neutral-900 dark:text-neutral-300 "
                data-id="NextPrev"
                data-glide-el="controls"
              >
                <button
                  className="w-10 h-10 mr-[6px] bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-6000 dark:hover:border-neutral-500 rounded-full flex items-center justify-center hover:border-neutral-300 focus:outline-none"
                  title="Prev"
                  data-glide-dir="<"
                >
                  <i className="las la-angle-left"></i>
                </button>
                <button
                  className="w-10 h-10 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-6000 dark:hover:border-neutral-500 rounded-full flex items-center justify-center hover:border-neutral-300 focus:outline-none"
                  title="Next"
                  data-glide-dir=">"
                >
                  <i className="las la-angle-right"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="Tabs">
            <Tab.Group>
              <Tab.List className="mb-12">
                <Tab className="Button  bg-[#4340CA] h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-2 py-2 sm:px-6 b disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0 mr-8">
                  New York
                </Tab>
                <Tab className="mr-8">Tokyo</Tab>
                <Tab className="mr-8">Paris</Tab>
              </Tab.List>
              <Tab.Panels>
                <Tab.Panel>
                  <div className="grid-cols-4 gap-2">
                    <div class="max-w-sm bg-white border border-gray-200 rounded-[30px] shadow-md dark:bg-gray-800 dark:border-gray-700">
                      <Swiper
                        pagination={{
                          dynamicBullets: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                      >
                        <SwiperSlide>
                          {" "}
                          <img
                            src="https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                            class="object-cover w-full h-full rounded-t-[30px]"
                            alt="imgs"
                          />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img
                            src="https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                            class="object-cover w-full h-full rounded-t-[30px]"
                            alt="imgs"
                          />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img
                            src="https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                            class="object-cover w-full h-full rounded-t-[30px]"
                            alt="imgs"
                          />
                        </SwiperSlide>
                      </Swiper>
                      <div class="p-5">
                        <a href="/chisfis/listing-stay-detail">
                          <div class="p-4 space-y-4">
                            <div class="space-y-2">
                              <span class="text-sm text-neutral-500 dark:text-neutral-400">
                                Entire cabin · 10 beds
                              </span>
                              <div class="flex items-center space-x-2">
                                <span class="Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs text-green-800 bg-green-100">
                                  ADS
                                </span>
                                <h2 class=" font-medium capitalize text-lg">
                                  <span class="line-clamp-1">
                                    Best Western Cedars Hotel{" "}
                                  </span>
                                </h2>
                              </div>
                              <div class="flex items-center text-neutral-500 dark:text-neutral-400 text-sm space-x-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  class="h-5 w-5"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                  ></path>
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                  ></path>
                                </svg>
                                <span class="">1 Anzinger Court</span>
                              </div>
                            </div>
                            <div class="w-14 border-b border-neutral-100 dark:border-neutral-800"></div>
                            <div class="flex justify-between items-center">
                              <span class="text-base font-semibold">
                                $26{" "}
                                <span class="text-sm text-neutral-500 dark:text-neutral-400 font-normal">
                                  /night
                                </span>
                              </span>
                              <div
                                class="StartRating flex items-center space-x-1 text-sm  "
                                data-id="StartRating"
                              >
                                <div class="pb-[2px]">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    class="w-[18px] h-[18px] text-orange-500"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                      clip-rule="evenodd"
                                    ></path>
                                  </svg>
                                </div>
                                <span class="font-medium ">4.8</span>
                                <span class="text-neutral-500 dark:text-neutral-400">
                                  (28)
                                </span>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </Tab.Panel>

                <Tab.Panel>test</Tab.Panel>

                <Tab.Panel>Content 3</Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
