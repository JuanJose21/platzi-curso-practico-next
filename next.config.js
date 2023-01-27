/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['api.lorem.space', 'placeimg.com', 'wixmp.com', 'romapy'],
  },
  // swcMinify: true,
  // env: {
  //   customKey: 'customValue'
  // },
  // // basePath: '/dist',
  // compress: true,
  // async redirect(){
  //   return [
  //     {
  //       source: '/hola',
  //       destination: 'https://gndx.dev/',
  //       permanent: true
  //     }
  //   ]
  // }
};

module.exports = nextConfig;
