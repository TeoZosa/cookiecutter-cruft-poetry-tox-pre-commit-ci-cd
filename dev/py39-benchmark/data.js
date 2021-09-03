window.BENCHMARK_DATA = {
  "lastUpdate": 1630688650821,
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
          "id": "3a244b7e3f0f82d493b232b286344fc968c3e5d6",
          "message": ":arrow_up: update template `nbqa` `pre-commit` hooks",
          "timestamp": "2021-09-03T16:58:23Z",
          "tree_id": "186a35841bfd41996044d717b7819b979a69560a"
        },
        "date": 1630688649090,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 16501.77101467338,
            "unit": "iter/sec",
            "range": "stddev: 0.000008385437853072203",
            "extra": "mean: 60.599556199804226 usec\nrounds: 7758"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 5261493.242651649,
            "unit": "iter/sec",
            "range": "stddev: 5.311249308324408e-9",
            "extra": "mean: 190.0601129529798 nsec\nrounds: 48781"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 14631.52617717876,
            "unit": "iter/sec",
            "range": "stddev: 0.000007380591347370624",
            "extra": "mean: 68.34557023584667 usec\nrounds: 9226"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 150812.8488296023,
            "unit": "iter/sec",
            "range": "stddev: 2.9325887498211375e-7",
            "extra": "mean: 6.630734766703212 usec\nrounds: 40651"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 16607.349128729165,
            "unit": "iter/sec",
            "range": "stddev: 0.000003473621737610457",
            "extra": "mean: 60.214305862342194 usec\nrounds: 10132"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 5262231.540291977,
            "unit": "iter/sec",
            "range": "stddev: 4.425861801671841e-9",
            "extra": "mean: 190.0334472823933 nsec\nrounds: 49262"
          }
        ]
      }
    ]
  }
}