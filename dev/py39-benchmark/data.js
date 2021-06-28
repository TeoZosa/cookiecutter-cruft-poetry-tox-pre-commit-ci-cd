window.BENCHMARK_DATA = {
  "lastUpdate": 1624888560472,
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
          "id": "7c2c9871c0c56c3851f98b74f45b05fdb81f15c8",
          "message": "Merge pull request #223 from TeoZosa/dependabot/pip/dot-github/workflows/pip-21.1.3",
          "timestamp": "2021-06-28T13:15:32Z",
          "tree_id": "86fef7fc2810020895b0ffb2bc018517efc14b9a"
        },
        "date": 1624888558556,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14860.513025993161,
            "unit": "iter/sec",
            "range": "stddev: 0.000028844772074355454",
            "extra": "mean: 67.29242780857277 usec\nrounds: 10112"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4646799.699201149,
            "unit": "iter/sec",
            "range": "stddev: 2.333719077475546e-7",
            "extra": "mean: 215.2018732746122 nsec\nrounds: 5956"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12395.167197842591,
            "unit": "iter/sec",
            "range": "stddev: 0.00009623968940112435",
            "extra": "mean: 80.67660436029072 usec\nrounds: 7752"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 149417.52748265618,
            "unit": "iter/sec",
            "range": "stddev: 0.000007772537753749177",
            "extra": "mean: 6.692655251681074 usec\nrounds: 47394"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14909.032900901128,
            "unit": "iter/sec",
            "range": "stddev: 0.000020357473175698112",
            "extra": "mean: 67.07343170056042 usec\nrounds: 6940"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4868529.578409723,
            "unit": "iter/sec",
            "range": "stddev: 5.875396095854944e-7",
            "extra": "mean: 205.40082665511025 nsec\nrounds: 16261"
          }
        ]
      }
    ]
  }
}