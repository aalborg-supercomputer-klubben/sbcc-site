import Dall_E_Image from "../public/img/DALL·E - super fast computers competing.png";
import HPL_Icon from "../public/img/HPL.ico";
import HPCG_Icon from "../public/img/HPCG.png";
import Intel_Icon from "../public/img/intel.png";

const benchmarks = {
  title: "Benchmarks",
  desc: "Participants will be required to run several benchmarks to showcase the performance of their clusters. You can find more information about these benchmarks and their requirements on their respective websites.",
  image: Dall_E_Image,
  bullets: [
    {
      title: "HPL",
      desc: "A Portable Implementation of the High-Performance Linpack Benchmark for Distributed-Memory Computers",
      icon: HPL_Icon,
    },
    {
      title: "HPCG ",
      desc: "HPCG is intended as a complement to the High Performance LINPACK benchmark. HPCG is designed to exercise computational and data access patterns that more closely match a different and broad set of important applications.",
      icon: HPCG_Icon,
    },
    {
      title: "Intel(R) MPI Benchmarks",
      desc: "A set of elementary benchmarks that conform to MPI-1, MPI-2, and MPI-3 standard. ",
      icon: Intel_Icon,
    },
  ],
};

export default benchmarks;
