window.BENCHMARK_DATA = {
  "lastUpdate": 1630622367810,
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
          "id": "440e468d62589e799eed15d35c13eb3855bce58f",
          "message": ":bug: Fix ADR-related file removal",
          "timestamp": "2021-09-02T22:32:51Z",
          "tree_id": "aa4d23bd2921828a23932b429900831212f8f8d7"
        },
        "date": 1630622365520,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15104.510963333632,
            "unit": "iter/sec",
            "range": "stddev: 0.000016810357705052475",
            "extra": "mean: 66.20538741224466 usec\nrounds: 1732"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3766282.3447674112,
            "unit": "iter/sec",
            "range": "stddev: 7.530737063549051e-7",
            "extra": "mean: 265.5138166655509 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12060.536661636534,
            "unit": "iter/sec",
            "range": "stddev: 0.00004489521441560231",
            "extra": "mean: 82.91504997293434 usec\nrounds: 1861"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 116629.31860034399,
            "unit": "iter/sec",
            "range": "stddev: 0.00001856275071253097",
            "extra": "mean: 8.574173389683601 usec\nrounds: 34483"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 13973.331793672409,
            "unit": "iter/sec",
            "range": "stddev: 0.0001279621130200204",
            "extra": "mean: 71.56489338160806 usec\nrounds: 13478"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3654166.9258847795,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026979951578308084",
            "extra": "mean: 273.66018583236 nsec\nrounds: 43104"
          }
        ]
      }
    ]
  }
}