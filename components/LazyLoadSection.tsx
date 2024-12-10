// "use client";
// import React, { useEffect } from "react";
// import { useInView } from "react-intersection-observer";

// const LazyLoadSection: React.FC<{
//   children: React.ReactNode;
//   sectionName: string;
// }> = ({ children, sectionName }) => {
//   const { ref, inView } = useInView({
//     threshold: 0.5,
//   });

//   useEffect(() => {
//     if (inView) {
//       console.log(`Downloading ${sectionName}`);
//     }
//   }, [inView, sectionName]);

//   useEffect(() => {
//     if (inView) {
//       const content = document.createElement("div");
//       content.innerHTML = React.isValidElement(children)
//         ? children.props.children
//         : "";
//       const blob = new Blob([content.outerHTML], { type: "text/html" });
//       const url = URL.createObjectURL(blob);
//       const a = document.createElement("a");
//       a.href = url;
//       a.download = `${sectionName}.html`;
//       a.click();
//       URL.revokeObjectURL(url);
//     }
//   }, [inView, sectionName, children]);

//   return <div ref={ref}>{children}</div>;
// };

// export default LazyLoadSection;
