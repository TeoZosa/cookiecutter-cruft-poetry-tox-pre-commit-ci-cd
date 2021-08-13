window.BENCHMARK_DATA = {
  "lastUpdate": 1628862511885,
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
          "id": "519bb2171b7159d1257ec5821e37005a1b298af8",
          "message": "Merge pull request #280 from TeoZosa/dependabot/pip/dot-github/workflows/pip-21.2.4",
          "timestamp": "2021-08-13T13:14:30Z",
          "tree_id": "1432e2b632f59bd4f04712aecd534f56c42bd4e3"
        },
        "date": 1628862510422,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 16656.91871543232,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028738154390771716",
            "extra": "mean: 60.03511316132671 usec\nrounds: 13441"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 5072469.548146683,
            "unit": "iter/sec",
            "range": "stddev: 9.750330411414757e-9",
            "extra": "mean: 197.14263250049174 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 14607.818265650149,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036487253156916205",
            "extra": "mean: 68.45649239431397 usec\nrounds: 5325"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 152079.37990553436,
            "unit": "iter/sec",
            "range": "stddev: 9.199538547227014e-7",
            "extra": "mean: 6.575513397155881 usec\nrounds: 48779"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 16584.526710525795,
            "unit": "iter/sec",
            "range": "stddev: 0.000006022090988950022",
            "extra": "mean: 60.29716840609774 usec\nrounds: 8913"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 5240160.752916128,
            "unit": "iter/sec",
            "range": "stddev: 5.381721257002291e-9",
            "extra": "mean: 190.83384024875633 nsec\nrounds: 49752"
          }
        ]
      }
    ]
  }
}