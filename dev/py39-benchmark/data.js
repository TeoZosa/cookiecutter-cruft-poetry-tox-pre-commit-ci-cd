window.BENCHMARK_DATA = {
  "lastUpdate": 1624576767612,
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
          "id": "e4e56f7a4f7aadc3ba5fbe6eae94bb65686a74e1",
          "message": ":green_heart: Remove Git LFS checkout hook for Semgrep job",
          "timestamp": "2021-06-24T23:15:01Z",
          "tree_id": "a1a63da9c1dd9411ccc0976392436d7a8e1a7502"
        },
        "date": 1624576766162,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 16604.27013709132,
            "unit": "iter/sec",
            "range": "stddev: 0.000010091765155026667",
            "extra": "mean: 60.22547162528738 usec\nrounds: 12987"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 5040832.526771144,
            "unit": "iter/sec",
            "range": "stddev: 9.923532204631575e-8",
            "extra": "mean: 198.37992924559495 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 14633.040382356377,
            "unit": "iter/sec",
            "range": "stddev: 0.000002237057775447384",
            "extra": "mean: 68.33849793825067 usec\nrounds: 8489"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 148193.13072137217,
            "unit": "iter/sec",
            "range": "stddev: 5.073556814948271e-7",
            "extra": "mean: 6.7479511036187425 usec\nrounds: 39369"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 16592.146499732535,
            "unit": "iter/sec",
            "range": "stddev: 0.000006157029532339837",
            "extra": "mean: 60.26947749142162 usec\nrounds: 9552"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 5059004.787018321,
            "unit": "iter/sec",
            "range": "stddev: 1.569526405650435e-8",
            "extra": "mean: 197.66733618557947 nsec\nrounds: 192308"
          }
        ]
      }
    ]
  }
}