window.BENCHMARK_DATA = {
  "lastUpdate": 1630622978733,
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
          "id": "ff874fe22d0fdde54ac7b5383c99d83481822a7f",
          "message": ":construction_worker: Specify test instance parameter: `adr_documentation_support`",
          "timestamp": "2021-09-02T22:43:13Z",
          "tree_id": "c5a0db1512162bca6e62b3c46637103bf880c976"
        },
        "date": 1630622976914,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15344.813172800541,
            "unit": "iter/sec",
            "range": "stddev: 0.00000883519200900138",
            "extra": "mean: 65.16860053875082 usec\nrounds: 9285"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 5010523.729509455,
            "unit": "iter/sec",
            "range": "stddev: 4.59178976861539e-8",
            "extra": "mean: 199.5799349496507 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 13685.915606457811,
            "unit": "iter/sec",
            "range": "stddev: 0.000011655061530215818",
            "extra": "mean: 73.0678186798216 usec\nrounds: 9497"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 148061.6480877805,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010353752870649046",
            "extra": "mean: 6.753943461490687 usec\nrounds: 33004"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15549.356294633646,
            "unit": "iter/sec",
            "range": "stddev: 0.000009048683542393792",
            "extra": "mean: 64.31134389435256 usec\nrounds: 14266"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4808366.646324868,
            "unit": "iter/sec",
            "range": "stddev: 1.314570013928909e-8",
            "extra": "mean: 207.9708295049256 nsec\nrounds: 181819"
          }
        ]
      }
    ]
  }
}