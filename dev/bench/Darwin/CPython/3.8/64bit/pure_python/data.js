window.BENCHMARK_DATA = {
  "lastUpdate": 1635513888763,
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
          "id": "7b92610f66caf12c3ca74377b94baa8c799f6efb",
          "message": "Merge pull request #399 from TeoZosa/dependabot/pip/darglint-1.8.1",
          "timestamp": "2021-10-29T13:14:27Z",
          "tree_id": "e539de4a3afefd68a14277449160984bbaa31c1a"
        },
        "date": 1635513886351,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 130199.02425203749,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031020333380222873",
            "extra": "mean: 7.68054911121398 usec\nrounds: 62501"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 5887411.878632218,
            "unit": "iter/sec",
            "range": "stddev: 2.748421112156706e-8",
            "extra": "mean: 169.85392233721333 nsec\nrounds: 62501"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 38251.19054449494,
            "unit": "iter/sec",
            "range": "stddev: 0.000006935564658229445",
            "extra": "mean: 26.142977140457102 usec\nrounds: 50001"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 79358.06317470514,
            "unit": "iter/sec",
            "range": "stddev: 0.0000060840116994463625",
            "extra": "mean: 12.601113988864883 usec\nrounds: 100001"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 129981.43315496355,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016540551021317716",
            "extra": "mean: 7.69340647912236 usec\nrounds: 19231"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 5841335.05548499,
            "unit": "iter/sec",
            "range": "stddev: 2.71947744954886e-8",
            "extra": "mean: 171.1937409001699 nsec\nrounds: 62501"
          }
        ]
      }
    ]
  }
}