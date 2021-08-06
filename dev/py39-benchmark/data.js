window.BENCHMARK_DATA = {
  "lastUpdate": 1628292481324,
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
          "id": "ec3211f8c1a9b044b05f9e9bbde25ea625381c23",
          "message": ":arrow_up: Update `poetry.lock` lockfile",
          "timestamp": "2021-08-06T23:21:52Z",
          "tree_id": "e3dfbac8bcb022736cac6a721697d0eb3bc9befa"
        },
        "date": 1628292479138,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15268.395181596625,
            "unit": "iter/sec",
            "range": "stddev: 0.00008223421199814476",
            "extra": "mean: 65.49476799011101 usec\nrounds: 5767"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4210294.49038417,
            "unit": "iter/sec",
            "range": "stddev: 6.143471212655392e-7",
            "extra": "mean: 237.5130771218975 nsec\nrounds: 175439"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 13501.343459008196,
            "unit": "iter/sec",
            "range": "stddev: 0.00003212587367436259",
            "extra": "mean: 74.06670329038941 usec\nrounds: 5288"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 126271.72102659472,
            "unit": "iter/sec",
            "range": "stddev: 0.000011420383555083093",
            "extra": "mean: 7.919429559286557 usec\nrounds: 37592"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15556.442653143848,
            "unit": "iter/sec",
            "range": "stddev: 0.00003575855882224564",
            "extra": "mean: 64.28204842820585 usec\nrounds: 13773"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4268872.327276916,
            "unit": "iter/sec",
            "range": "stddev: 1.918235588943761e-7",
            "extra": "mean: 234.25390204602195 nsec\nrounds: 192271"
          }
        ]
      }
    ]
  }
}