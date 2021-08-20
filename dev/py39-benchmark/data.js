window.BENCHMARK_DATA = {
  "lastUpdate": 1629470569726,
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
          "id": "357112cb25d3ee32f8ae129d7e6f1a512f42cdf1",
          "message": "Merge pull request #291 from TeoZosa/dependabot/pip/dot-github/workflows/poetry-1.1.8",
          "timestamp": "2021-08-20T13:15:35Z",
          "tree_id": "0e150e00df715758a7233ade7cb9fd2582c0956c"
        },
        "date": 1629470567382,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15661.56101886912,
            "unit": "iter/sec",
            "range": "stddev: 0.000026560472702347886",
            "extra": "mean: 63.85059565870832 usec\nrounds: 12346"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4863418.359440151,
            "unit": "iter/sec",
            "range": "stddev: 5.469928340392047e-7",
            "extra": "mean: 205.61669305296488 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12705.149059257252,
            "unit": "iter/sec",
            "range": "stddev: 0.000015181663587432392",
            "extra": "mean: 78.70824618711403 usec\nrounds: 7868"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 139111.4933466129,
            "unit": "iter/sec",
            "range": "stddev: 0.000005091668297325474",
            "extra": "mean: 7.1884786507781975 usec\nrounds: 47847"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15601.968159974504,
            "unit": "iter/sec",
            "range": "stddev: 0.00005174962751751421",
            "extra": "mean: 64.094477680413 usec\nrounds: 9364"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4756402.791991953,
            "unit": "iter/sec",
            "range": "stddev: 1.7709502507993362e-7",
            "extra": "mean: 210.24291754334504 nsec\nrounds: 188680"
          }
        ]
      }
    ]
  }
}