import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

const StepRight = (props: SvgProps) => (
  <Svg width={150} height={150} {...props}>
    <Path
      fill={props.color || "#070707"}
      fillRule="evenodd"
      d="M46.463 1.031c-4.267 1.593-5.966 4.848-5.912 11.327.059 7.242 2.194 11.942 6.416 14.125 4.028 2.083 5.73 1.911 8.498-.857 4.816-4.816 4.207-16.002-1.186-21.786-2.856-3.063-5.037-3.846-7.816-2.809m19.562 6.944c-4.264 4.264-3.658 12.75 1.168 16.332 2.565 1.904 2.815 1.918 5.294.293 5.173-3.389 5.671-11.533.992-16.212-2.905-2.905-4.854-3.013-7.454-.413m16.103 5.37c-1.882 2.268-2.443 7.479-1.144 10.616C83.803 30.767 90 27.732 90 19.544c0-6.071-4.825-9.87-7.872-6.199m10.945 9.29c-2.322 2.951-2.552 4.601-1.038 7.431 2.262 4.226 7.965.582 7.965-5.089 0-5.194-3.7-6.445-6.927-2.342M100 31.5c-1.116 2.936.268 7.5 2.275 7.5 2.103 0 3.725-2.178 3.725-5 0-4.979-4.366-6.798-6-2.5m-46.666 5.564c-4.798 2.375-7.345 6.76-7.312 12.587.036 6.303 3.098 11.382 11.277 18.701C66.317 76.424 69 81.24 69 89.356c0 6.796-1.871 10.866-8.57 18.644-6.292 7.305-8.381 12.133-8.408 19.434-.042 11.23 5.539 18.016 15.818 19.233 7.29.864 11.772-.322 16.141-4.269 4.399-3.974 7.011-10.409 7.034-17.326.024-7.573 2.706-16.638 8.557-28.922 10.749-22.568 11.15-36.368 1.38-47.467-9.811-11.146-35.776-17.481-47.618-11.619"
    />
    <Path
      fill="transparent"
      fillRule="evenodd"
      d="M0 75.006v75.007l75.25-.257 75.25-.256.256-74.75.257-74.75-51.257.063C71.565.098 49.4.499 50.5.954c8.054 3.332 11.112 18.525 4.965 24.672-2.768 2.768-4.47 2.94-8.498.857-4.222-2.183-6.357-6.883-6.416-14.125C40.497 5.882 42.14 2.73 46.5.945 47.623.486 37.864.099 24.25.063L0 0v75.006m.475.494c0 41.25.123 58.271.275 37.824.151-20.447.151-54.197 0-75C.599 17.521.475 34.25.475 75.5m65.55-67.525c-4.264 4.264-3.658 12.75 1.168 16.332 2.565 1.904 2.815 1.918 5.294.293 5.173-3.389 5.671-11.533.992-16.212-2.905-2.905-4.854-3.013-7.454-.413m16.103 5.37c-1.882 2.268-2.443 7.479-1.144 10.616C83.803 30.767 90 27.732 90 19.544c0-6.071-4.825-9.87-7.872-6.199m10.945 9.29c-2.322 2.951-2.552 4.601-1.038 7.431 2.262 4.226 7.965.582 7.965-5.089 0-5.194-3.7-6.445-6.927-2.342M100 31.5c-1.116 2.936.268 7.5 2.275 7.5 2.103 0 3.725-2.178 3.725-5 0-4.979-4.366-6.798-6-2.5m-46.666 5.564c-4.798 2.375-7.345 6.76-7.312 12.587.036 6.303 3.098 11.382 11.277 18.701C66.317 76.424 69 81.24 69 89.356c0 6.796-1.871 10.866-8.57 18.644-6.292 7.305-8.381 12.133-8.408 19.434-.042 11.23 5.539 18.016 15.818 19.233 7.29.864 11.772-.322 16.141-4.269 4.399-3.974 7.011-10.409 7.034-17.326.024-7.573 2.706-16.638 8.557-28.922 10.749-22.568 11.15-36.368 1.38-47.467-9.811-11.146-35.776-17.481-47.618-11.619"
    />
  </Svg>
)
export default StepRight