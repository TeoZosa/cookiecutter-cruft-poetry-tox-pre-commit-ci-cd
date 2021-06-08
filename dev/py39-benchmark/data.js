window.BENCHMARK_DATA = {
  "lastUpdate": 1623178851131,
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
          "id": "203bb6a310984de85ff8b2407463b7982358ebfc",
          "message": ":construction_worker: Add and leverage genuine \"Dependabot PR Check\" workflow",
          "timestamp": "2021-06-08T18:53:41Z",
          "tree_id": "5af6e99febf53321b1a9e43d656d48bdfbfbcf95"
        },
        "date": 1623178849881,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15014.93553420019,
            "unit": "iter/sec",
            "range": "stddev: 0.00006618324805330775",
            "extra": "mean: 66.60035254378916 usec\nrounds: 12285"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4080452.155719306,
            "unit": "iter/sec",
            "range": "stddev: 6.625869520196322e-7",
            "extra": "mean: 245.07087985272412 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 13305.274534537792,
            "unit": "iter/sec",
            "range": "stddev: 0.0000448676672257556",
            "extra": "mean: 75.15816358423895 usec\nrounds: 703"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 129869.05102856955,
            "unit": "iter/sec",
            "range": "stddev: 0.000001264264376968226",
            "extra": "mean: 7.700063965047474 usec\nrounds: 33784"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15359.858494726084,
            "unit": "iter/sec",
            "range": "stddev: 0.00006885897334482508",
            "extra": "mean: 65.1047664497272 usec\nrounds: 13055"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4215102.480149667,
            "unit": "iter/sec",
            "range": "stddev: 4.4204983887893025e-8",
            "extra": "mean: 237.2421559637973 nsec\nrounds: 196079"
          }
        ]
      }
    ]
  }
}