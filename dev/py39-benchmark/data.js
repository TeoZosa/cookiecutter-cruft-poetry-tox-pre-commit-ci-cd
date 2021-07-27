window.BENCHMARK_DATA = {
  "lastUpdate": 1627392578195,
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
          "id": "a911006f70999663609349d881e54144be12ef54",
          "message": "Merge pull request #257 from TeoZosa/dependabot/pip/hypothesis-6.14.5",
          "timestamp": "2021-07-27T13:16:47Z",
          "tree_id": "ba1e9fc078900ce0861c6b0233270a1df84eb9f8"
        },
        "date": 1627392576640,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15114.630710158077,
            "unit": "iter/sec",
            "range": "stddev: 0.00008256827025083174",
            "extra": "mean: 66.16106070841221 usec\nrounds: 6803"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3988266.3417032002,
            "unit": "iter/sec",
            "range": "stddev: 4.721776200935336e-7",
            "extra": "mean: 250.7355112029921 nsec\nrounds: 199961"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 13239.435285836562,
            "unit": "iter/sec",
            "range": "stddev: 0.00003871557707522547",
            "extra": "mean: 75.53192250350676 usec\nrounds: 5097"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 127309.45349460027,
            "unit": "iter/sec",
            "range": "stddev: 0.000008164419949120864",
            "extra": "mean: 7.854876229143614 usec\nrounds: 44049"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15558.84465788179,
            "unit": "iter/sec",
            "range": "stddev: 0.00002129316882678286",
            "extra": "mean: 64.27212444038514 usec\nrounds: 8928"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3966901.4581059795,
            "unit": "iter/sec",
            "range": "stddev: 5.636708432853661e-7",
            "extra": "mean: 252.08591908821106 nsec\nrounds: 192271"
          }
        ]
      }
    ]
  }
}