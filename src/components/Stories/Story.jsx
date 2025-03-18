import React from 'react';

const Story = () => {
  const storyDivs = [
    {
      img: "https://brostore.uz/cdn/shop/files/bb3ce2c80a9671c7fcc7d1d12b08e50cd5df7cea20acd803d1ce10c24aff10a9_png.webp?v=1734092194",
      title: "MacBook "
    },
    {
      img: "https://media.ed.edmunds-media.com/ford/mustang/2025/oem/2025_ford_mustang_coupe_dark-horse_fq_oem_1_1600.jpg",
      title: "Car Brand"
    },
    {
      img: "https://motherspet.com/blogs/wp-content/uploads/2024/07/100-wild-animals.jpg",
      title: " Animals"
    },
    {
      img: "https://www.worldatlas.com/r/w728-h721-q90/img/areamap/continent/north_america_map.gif",
      title: "USA"
    },
    {
      img: "https://cdn.commeta.uz/media/uploaded/2023/09/26/najot_talim_logo.jpg",
      title: "Najot ta'lim"
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Cristiano_Ronaldo_WC2022_-_01_%28cropped%29.jpg",
      title: "Cristiano"
    },
    {
      img: "https://s.france24.com/media/display/451ed2b8-eed6-11ea-afdd-005056bf87d6/w:1280/p:1x1/messi-1805.jpg",
      title: "Messi"
    },
    {
        img: "https://images.saymedia-content.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MjAwMTUwMjI4Mzc1NDQ2NjM2/disadvantages-of-travelling-by-plane.jpg",
        title: "Boeing 777"
      },
      {
        img: "https://iplanet.one/cdn/shop/files/iPhone_15_Pink_PDP_Image_Position-1__en-IN_e784559e-7a8a-451a-8949-354ca2b18e62.jpg?v=1695428218&width=1920",
        title: "Malika"
      }
  ];

  return (
    <div className='flex gap-1 ms-24 mt-6'>
      {storyDivs.map((story, index) => (
        <div key={index} className='flex flex-col items-center gap-1 w-20'>
          <img
            src={story.img}
            alt="story"
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "2px solid #ff4500"
            }}
          />
          <p className='flex flex-col text-black text-sm'>{story.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Story;
