window.BENCHMARK_DATA = {
  "lastUpdate": 1629124871241,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "04d23f88731a673cf1e998caa12584257296f423",
          "message": "Merge pull request #285 from TeoZosa/dependabot/pip/importlib-metadata-4.6.4",
          "timestamp": "2021-08-16T14:26:07Z",
          "tree_id": "bd48c796f86ef38ed258561a2a4eecdde0247e4d"
        },
        "date": 1629124869519,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 16180.19086002449,
            "unit": "iter/sec",
            "range": "stddev: 0.000008800687374914307",
            "extra": "mean: 61.80396811453227 usec\nrounds: 8562"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 5251733.050252138,
            "unit": "iter/sec",
            "range": "stddev: 5.221233034690601e-9",
            "extra": "mean: 190.41333411868698 nsec\nrounds: 51021"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 14053.864683057205,
            "unit": "iter/sec",
            "range": "stddev: 0.000009783786643298006",
            "extra": "mean: 71.15480492747032 usec\nrounds: 9417"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 154455.0147856281,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025682658915344",
            "extra": "mean: 6.474377030670869 usec\nrounds: 33671"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 16348.238385197534,
            "unit": "iter/sec",
            "range": "stddev: 0.000005340232649291204",
            "extra": "mean: 61.16867006939703 usec\nrounds: 13812"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4971553.329458443,
            "unit": "iter/sec",
            "range": "stddev: 2.035874363851513e-8",
            "extra": "mean: 201.14437756780006 nsec\nrounds: 196079"
          }
        ]
      }
    ]
  }
}