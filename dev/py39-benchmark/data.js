window.BENCHMARK_DATA = {
  "lastUpdate": 1629208272339,
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
          "id": "63fb803c622e28ddf63c62c8c31aa7241f646ee1",
          "message": "Merge pull request #287 from TeoZosa/dependabot/pip/icontract-2.5.4",
          "timestamp": "2021-08-17T13:40:08Z",
          "tree_id": "d98a37c7055d532d88e085dfed276c7e59162ade"
        },
        "date": 1629208270420,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 16008.906626080232,
            "unit": "iter/sec",
            "range": "stddev: 0.000009166524906225595",
            "extra": "mean: 62.465227848283675 usec\nrounds: 12166"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4091185.205802726,
            "unit": "iter/sec",
            "range": "stddev: 4.6359129156849914e-7",
            "extra": "mean: 244.42794684076537 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12984.984366825156,
            "unit": "iter/sec",
            "range": "stddev: 0.00009329294721838131",
            "extra": "mean: 77.01202956815736 usec\nrounds: 8658"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 111540.66474039681,
            "unit": "iter/sec",
            "range": "stddev: 0.00002290740388779192",
            "extra": "mean: 8.965340150405513 usec\nrounds: 34129"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15542.75530090351,
            "unit": "iter/sec",
            "range": "stddev: 0.00008240771353548309",
            "extra": "mean: 64.33865686233054 usec\nrounds: 13123"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 2920149.723120667,
            "unit": "iter/sec",
            "range": "stddev: 3.123842294266144e-7",
            "extra": "mean: 342.44819437933927 nsec\nrounds: 5289"
          }
        ]
      }
    ]
  }
}