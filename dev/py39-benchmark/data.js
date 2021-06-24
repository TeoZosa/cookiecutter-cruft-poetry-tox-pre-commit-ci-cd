window.BENCHMARK_DATA = {
  "lastUpdate": 1624576321830,
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
          "id": "32c3cfa06c5a24eaf79860b2063afbd87af8c226",
          "message": ":wrench: Move and expand `interrogate` `pre-commit` hook configs",
          "timestamp": "2021-06-24T23:06:48Z",
          "tree_id": "7fb272879069389bcfb8fe29787e4defe4b8186b"
        },
        "date": 1624576320425,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 16064.091779766688,
            "unit": "iter/sec",
            "range": "stddev: 0.000005635915425279706",
            "extra": "mean: 62.25064035425498 usec\nrounds: 4852"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4352635.846178669,
            "unit": "iter/sec",
            "range": "stddev: 1.4077674082682864e-7",
            "extra": "mean: 229.74584489515402 nsec\nrounds: 181819"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 13610.786110999481,
            "unit": "iter/sec",
            "range": "stddev: 0.000053671111577594306",
            "extra": "mean: 73.47114206664783 usec\nrounds: 5061"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 128189.4331187691,
            "unit": "iter/sec",
            "range": "stddev: 0.000003505160567998899",
            "extra": "mean: 7.800955005967517 usec\nrounds: 40161"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 16002.364151802753,
            "unit": "iter/sec",
            "range": "stddev: 0.00001558958382850434",
            "extra": "mean: 62.49076639637303 usec\nrounds: 6541"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4394133.901498962,
            "unit": "iter/sec",
            "range": "stddev: 3.869502420362844e-8",
            "extra": "mean: 227.57613273016247 nsec\nrounds: 200000"
          }
        ]
      }
    ]
  }
}