export default function LoadingAnimation() {
  return (
    <div
      className="animate-spin">
      <svg

        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="none"
        viewBox="0 0 16 16">
        <circle cx="8" cy="8" r="7" stroke="#ECFDF5" strokeWidth="2"></circle>
        <mask id="path-2-inside-1_982_2609" fill="#fff">
          <path d="M15.007 8c.548 0 1 .446.931.99a8 8 0 01-6.098 6.796c-.534.126-1.027-.275-1.086-.82-.059-.545.34-1.027.868-1.175a6.013 6.013 0 004.31-4.802c.09-.541.526-.989 1.075-.989z"></path>
        </mask>
        <path
          stroke="#10B981"
          strokeWidth="4"
          d="M15.007 8c.548 0 1 .446.931.99a8 8 0 01-6.098 6.796c-.534.126-1.027-.275-1.086-.82v0c-.059-.545.34-1.027.868-1.175a6.013 6.013 0 004.31-4.802c.09-.541.526-.989 1.075-.989v0z"
          mask="url(#path-2-inside-1_982_2609)"
        ></path>
      </svg>
    </div>

  )
}