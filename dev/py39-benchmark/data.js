window.BENCHMARK_DATA = {
  "lastUpdate": 1631118927489,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa"
          },
          "id": "b83ef09e0688815ea285809279ef67b1f35ea7f5",
          "message": ":cookie: :memo: Document Make's role in project\n\nInterface shims leverage the\n[dependency inversion principle](https://en.wikipedia.org/wiki/Dependency_inversion_principle)\nto allow for implementation detail flexibility, interface extensibility\nand, in this case, a uniform interface across projects.\n\nEx. from \"The Missing README\"\n- Chapter 11: Creating Evolvable Architectures\n- Section: Design for Evolvability\n- Sub-section: You Ain’t Gonna Need It (para. 9)\n\n\"In the meantime, place interface shims where you suspect optimizations\ncan be inserted, but don’t actually implement them. For example, if you\nare creating a new file format and suspect you’ll need compression or\nencryption later, provide a header that specifies the encoding, but only\n implement the uncompressed encoding.\" [1]\n\n[1] C. Riccomini and D. Ryaboy, The Missing README: A Guide for the New Software Engineer, Paperback. No Starch Press, 2021.",
          "timestamp": "2021-09-08T16:30:01Z",
          "tree_id": "1d7fa17c4ee6f32210ea2326e9a800e54ee65540"
        },
        "date": 1631118925043,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 16532.391225712494,
            "unit": "iter/sec",
            "range": "stddev: 0.000007045711186342268",
            "extra": "mean: 60.487317675178176 usec\nrounds: 7536"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4957128.763447048,
            "unit": "iter/sec",
            "range": "stddev: 1.2373447049464295e-8",
            "extra": "mean: 201.72968016801224 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 14515.346153034185,
            "unit": "iter/sec",
            "range": "stddev: 0.0000085304833085331",
            "extra": "mean: 68.89260438277368 usec\nrounds: 9355"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 150256.07272583965,
            "unit": "iter/sec",
            "range": "stddev: 3.295121313485654e-7",
            "extra": "mean: 6.655305052625865 usec\nrounds: 35843"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 16666.824368485173,
            "unit": "iter/sec",
            "range": "stddev: 0.00000813325588680686",
            "extra": "mean: 59.999432278825225 usec\nrounds: 13947"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 5071082.303510724,
            "unit": "iter/sec",
            "range": "stddev: 1.0900403547237086e-8",
            "extra": "mean: 197.19656281460158 nsec\nrounds: 196079"
          }
        ]
      }
    ]
  }
}