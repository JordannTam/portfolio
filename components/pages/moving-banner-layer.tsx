"use client"
import Banner from "../banner"
import { TopLayer } from "./topLayer"

const style = {
  banner: {
    backgroundColor: "#00dddd",
  },
  a: {
    // display: "flex",
  }
}

export const MovingBannerLayer = () => {

  return (
    <div
      style={style.banner && style.a}
      className=
        "transition duration-200 ease-in-out relative h-36 lg:h-[1020px] bg-white rounded-b-[120px] border-b-[1px] border-[#ecebea]">
      <TopLayer />
      <Banner />

    </div>
  )
}