window.BENCHMARK_DATA = {
  "lastUpdate": 1628308132911,
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
          "id": "8fe7192072e7319e5d1c1e52ae39cd24e88d7658",
          "message": ":bookmark: Bump version number to `0.3.1`",
          "timestamp": "2021-08-07T03:43:19Z",
          "tree_id": "e222af9ee4e491b1eb1fb6cb6d76029dcc2033b1"
        },
        "date": 1628308130710,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15640.944620216396,
            "unit": "iter/sec",
            "range": "stddev: 0.000008177559215384614",
            "extra": "mean: 63.934757412763275 usec\nrounds: 12107"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4288787.210009706,
            "unit": "iter/sec",
            "range": "stddev: 4.799306337347076e-8",
            "extra": "mean: 233.166149550637 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 13482.285324224558,
            "unit": "iter/sec",
            "range": "stddev: 0.0000143405031140586",
            "extra": "mean: 74.17140165423072 usec\nrounds: 5201"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 137761.23630553126,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016707999083915457",
            "extra": "mean: 7.258936017256467 usec\nrounds: 29586"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15637.00034933266,
            "unit": "iter/sec",
            "range": "stddev: 0.000011784550148748915",
            "extra": "mean: 63.95088429109595 usec\nrounds: 13387"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4239180.396857566,
            "unit": "iter/sec",
            "range": "stddev: 1.7678742724775485e-7",
            "extra": "mean: 235.8946556606318 nsec\nrounds: 5699"
          }
        ]
      }
    ]
  }
}