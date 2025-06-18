import React from "react";
import DefaultLayoutHoc from "../layout/Default.layout";

// components
import Poster from "../components/Poster/Poster.Component";
import PlayFilters from "../components/PlayFilters/PlayFilters.Component";

const PlayPage = () => {
  return (
    <>
      <div className="container mx-auto px-4 my-10 flex flex-col">
        <h2 className="text-2xl font-bold mb-6">Plays in Hospet</h2>
        <div className="flex flex-wrap">
          <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
            <a
              href="https://in.bookmyshow.com/events/kisi-ko-batana-mat-by-anubhav-singh-bassi/ET00383732?data=similarEvent"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
            >
              <Poster
                isPlay={true}
                src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-kisi-ko-batana-mat-ft-anubhav-singh-bassi-0-2025-3-9-t-8-12-52.jpg"
                title="So Rude of Me By Sweets"
                subtitle="Comedy Shows | English, Kannada | 18yrs+ | 2hr 30mins"
              />
            </a>
          </div>
          <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
            <a
              href="https://in.bookmyshow.com/events/so-rude-of-me-by-swati-sachdeva/ET00331405"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
            >
              <Poster
                isPlay={true}
                src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-so-rude-of-me-by-swati-sachdeva-0-2022-11-21-t-7-9-55.jpg"
                title="So Rude of Me By Sweets"
                subtitle="Comedy Shows | English, Kannada | 18yrs+ | 2hr 30mins"
              />
            </a>
          </div>
          <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
            <a
              href="https://in.bookmyshow.com/events/cap-mania-tour-ft-himesh-reshammiya/ET00441454?data=similarEvent"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
            >
              <Poster
                isPlay={true}
                src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-capmania-tour-ft-himesh-reshammiya-0-2025-4-10-t-7-55-33.jpg"
                title="So Rude of Me By Sweets"
                subtitle="Comedy Shows | English, Kannada | 18yrs+ | 2hr 30mins"
              />
            </a>
          </div>
          <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
            <a
              href="https://in.bookmyshow.com/events/sachet-parampara-raanjhan-india-tour-delhi/ET00443234?data=similarEvent"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
            >
              <Poster
                isPlay={true}
                src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-sachet-parampara-raanjhan-india-tour-delhi-0-2025-4-30-t-12-11-29.jpg"
                title="So Rude of Me By Sweets"
                subtitle="Comedy Shows | English, Kannada | 18yrs+ | 2hr 30mins"
              />
            </a>
          </div>
          <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
            <a
              href="https://in.bookmyshow.com/events/geet-govind-songs-of-divine-love/ET00437392?data=similarEvent"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
            >
              <Poster
                isPlay={true}
                src="https://assets-in.bmscdn.com/nmcms/desktop/media-desktop-shankar-mahadevan-live-for-world-s-tallest-temple-2025-4-26-t-11-40-41.jpg"
                title="So Rude of Me By Sweets"
                subtitle="Comedy Shows | English, Kannada | 18yrs+ | 2hr 30mins"
              />
            </a>
          </div>
          <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
            <a
              href="https://in.bookmyshow.com/events/sonu-nigam-live-in-concert-gurugram/ET00439782?data=similarEvent"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
            >
              <Poster
                isPlay={true}
                src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-sonu-nigam-live-in-concert-gurugram-0-2025-3-27-t-11-26-42.jpg"
                title="So Rude of Me By Sweets"
                subtitle="Comedy Shows | English, Kannada | 18yrs+ | 2hr 30mins"
              />
            </a>
          </div>
          <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
            <a
              href="https://in.bookmyshow.com/events/jazbaa-ft-rekha-bharadwaj-live-in-concert/ET00415475?data=similarEvent"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
            >
              <Poster
                isPlay={true}
                src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-jazbaa-ft-rekha-bhardwaj-live-in-concert-0-2025-2-3-t-6-6-41.jpg"
                title="So Rude of Me By Sweets"
                subtitle="Comedy Shows | English, Kannada | 18yrs+ | 2hr 30mins"
              />
            </a>
          </div>
          <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
            <a
              href="https://in.bookmyshow.com/events/haryanvi-mashup/ET00439401?data=similarEven"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
            >
              <Poster
                isPlay={true}
                src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-haryanvi-mashup-0-2025-3-25-t-2-15-38.jpg"
                title="So Rude of Me By Sweets"
                subtitle="Comedy Shows | English, Kannada | 18yrs+ | 2hr 30mins"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="lg:w-1/4 p-4 bg-white rounded">
        <h2 className="text-2xl font-bold mb-4">Filters</h2>
        <div>
          <PlayFilters
            title="Date"
            tags={["Today", "Tomorrow", "This Weekend"]}
          />
        </div>
        <div>
          <PlayFilters
            title="Language"
            tags={["English", "Kannada", "Hindi", "Telgu"]}
          />
        </div>
      </div>
    </>
  );
};

export default DefaultLayoutHoc(PlayPage);
