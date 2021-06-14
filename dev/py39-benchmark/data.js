window.BENCHMARK_DATA = {
  "lastUpdate": 1623632179482,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "id": "e018c91ecca370fe4e2d1f09f8e1fdb5b1b0423a",
          "message": ":arrow_up: Update cookiecutter `pre-commit` hook versions",
          "timestamp": "2021-06-14T00:51:23Z",
          "tree_id": "3f86092362228096052bffb8628844b14099ffd2"
        },
        "date": 1623632177945,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15363.636422045252,
            "unit": "iter/sec",
            "range": "stddev: 0.0000230182396996022",
            "extra": "mean: 65.08875714899774 usec\nrounds: 4546"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4811434.549010584,
            "unit": "iter/sec",
            "range": "stddev: 1.3282187374897307e-7",
            "extra": "mean: 207.83822159769582 nsec\nrounds: 13737"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12793.250970907478,
            "unit": "iter/sec",
            "range": "stddev: 0.00005483196991256106",
            "extra": "mean: 78.16621453562135 usec\nrounds: 7430"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 136756.63679420753,
            "unit": "iter/sec",
            "range": "stddev: 0.000005425261919424505",
            "extra": "mean: 7.3122593787152566 usec\nrounds: 26043"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15291.587618427897,
            "unit": "iter/sec",
            "range": "stddev: 0.000014707180916218182",
            "extra": "mean: 65.39543342085028 usec\nrounds: 6098"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4265666.570194287,
            "unit": "iter/sec",
            "range": "stddev: 5.319785572606741e-7",
            "extra": "mean: 234.4299498199211 nsec\nrounds: 196079"
          }
        ]
      }
    ]
  }
}